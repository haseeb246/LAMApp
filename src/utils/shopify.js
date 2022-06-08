export const flatten = (array) => {
  if (array?.edges?.[0]) {
    return array.edges.map(({ node }) => node);
  }

  return array;
};

export const findVariantByOptions = (product, userSelectedOptions) => {
  const variants = flatten(product?.storefront?.variants || []);

  if (!variants?.[0] || !userSelectedOptions) {
    return null;
  }

  const matchedOptionThreshold = variants?.[0]?.selectedOptions?.length;

  let foundVariant;

  variants.forEach((variant) => {
    if (foundVariant) {
      return;
    }

    let matchedOptionCount = 0;

    variant.selectedOptions.forEach((selectedOption) => {
      if (foundVariant) {
        return;
      }

      userSelectedOptions?.forEach((userOption) => {
        if (foundVariant) {
          return;
        }

        if (userOption?.name === selectedOption?.name && userOption?.value === selectedOption?.value) {
          matchedOptionCount += 1;
        }
      });
    });

    if (matchedOptionCount >= matchedOptionThreshold) {
      foundVariant = variant;
    }
  });

  return foundVariant;
};

export const getVariantDescriptor = (variant) => {
  if (!variant?.selectedOptions?.[1]) {
    return null;
  }

  let variantDescriptor = null;

  variant?.selectedOptions?.forEach((selectedOption) => {
    if (variantDescriptor) {
      variantDescriptor = `${variantDescriptor}, `;
    } else {
      variantDescriptor = ``;
    }

    variantDescriptor = `${variantDescriptor}${selectedOption?.value}`;
  });

  return variantDescriptor;
};

export const sortSanityOptions = (options, priority) =>
  options.sort((a, b) => priority.indexOf(a.name.toLowerCase()) - priority.indexOf(b.name.toLowerCase()));

export const sortShopifyOptions = (options, priority) => {
  options.sort((a, b) => priority.indexOf(a.name.toLowerCase()) - priority.indexOf(b.name.toLowerCase()));

  return options;
};

export const getAvailableVariantsByOptions = (product, userSelectedOptions, optionPriority) => {
  const compatibleVariants = [];
  const compatibleVariantIDs = [];
  const variants = flatten(product?.storefront?.variants || []);

  if (!userSelectedOptions?.[0] || !variants?.[0]) {
    return compatibleVariants;
  }

  const sortedUserOptions = sortSanityOptions(userSelectedOptions, optionPriority);

  //

  variants.forEach((variant) => {
    const compatibleIndices = Array(sortedUserOptions.length).fill(false);
    const optionsForThisVariant = variant?.selectedOptions;

    if (!optionsForThisVariant?.[0]) {
      return;
    }

    optionsForThisVariant.sort(
      (a, b) => optionPriority.indexOf(a.name.toLowerCase()) - optionPriority.indexOf(b.name.toLowerCase())
    );

    sortedUserOptions.forEach((userOptionKey, userOptionIndex) => {
      const userOption = sortedUserOptions[userOptionKey];

      const isCompatible = optionsForThisVariant.find(
        (variantSelectedOption) =>
          variantSelectedOption?.name?.toLowerCase() === userOption?.name?.toLowerCase() &&
          variantSelectedOption?.value?.toLowerCase() === userOption?.value?.toLowerCase()
      );

      if (isCompatible) {
        compatibleIndices[userOptionIndex] = true;
      }
    });

    if (compatibleIndices.every((i) => i === true) && !compatibleVariantIDs?.includes(variant?.id)) {
      compatibleVariantIDs.push(variant.id);
      compatibleVariants.push(variant);
    }
  });

  return compatibleVariants;
};

export const getCompatibleProductOptions = (product, userSelectedOptions, optionPriority) => {
  const compatibleOptions = [];

  if (!userSelectedOptions?.[0]) {
    return compatibleOptions;
  }

  const loadedOptionKeys = [];
  const compatibleVariants = getAvailableVariantsByOptions(product, userSelectedOptions, optionPriority);

  if (!compatibleVariants?.[0]) {
    return compatibleOptions;
  }

  const currentTier = Object.keys(userSelectedOptions)?.length - 1;

  compatibleVariants.forEach((variant) => {
    const sortedVariantOptions = sortShopifyOptions(variant.selectedOptions, optionPriority);

    const optionForTier = sortedVariantOptions?.[currentTier + 1];

    if (!optionForTier) {
      return;
    }

    if (!loadedOptionKeys?.includes(`${optionForTier?.name?.toLowerCase()}:${optionForTier?.value?.toLowerCase()}`)) {
      loadedOptionKeys.push(`${optionForTier?.name?.toLowerCase()}:${optionForTier?.value?.toLowerCase()}`);
      compatibleOptions.push(optionForTier);
    }
  });

  return compatibleOptions;
};

export const getIncompatibleProductOptions = (product, userSelectedOptions, optionPriority) => {
  const compatibleOptions = getCompatibleProductOptions(product, userSelectedOptions, optionPriority);
  const compatibleOptionsComparator = compatibleOptions.map(({ name, value }) => `${name}:${value}`.toLowerCase());
  const excludedOptions = [];
  const allOptions = sortShopifyOptions(product?.store?.options || [], optionPriority);

  allOptions.forEach((productOption, productOptionIndex) => {
    if (productOptionIndex !== userSelectedOptions?.length) {
      return;
    }

    productOption.values.forEach(({ value }) => {
      const compositeKey = `${productOption?.name}:${value}`.toLowerCase();

      if (!compatibleOptionsComparator?.includes(compositeKey)) {
        excludedOptions.push(compositeKey);
      }
    });
  });

  return excludedOptions;
};
