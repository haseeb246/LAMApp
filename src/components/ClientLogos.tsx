import React, { useContext, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { DocumentContext } from "../context/DocumentContext";
import Button from "./Button";
import commonUtil from "../utils/commonUtil";
import { ClientDto } from "../models/clientDto";

const ClientLogos = ({ clients }: any) => {
  const clientsList = useRef<any>();

  const { device } = useContext(DocumentContext);
  const [clientListStyles, setClientListStyles] = useState<any>({
    height: `auto`,
  });
  const [clientListToggle, setClientListToggle] = useState(false);

  useEffect(() => {
    if (!clientsList?.current) {
      return;
    }

    if (device !== `desktop`) {
      setTimeout(() => {
        setClientListStyles({
          height: clientsList.current.clientHeight / 2,
        });
      }, 100);
    } else {
      setClientListStyles({
        height: `auto`,
      });
    }
  }, [clientsList?.current]);

  useEffect(() => {
    if (clientsList?.current && device !== `desktop`) {
      if (clientListToggle) {
        setClientListStyles({
          height: clientsList.current.clientHeight,
        });
      } else {
        setClientListStyles({
          height: clientsList.current.clientHeight / 2,
        });
      }
    } else {
      setClientListStyles({
        height: `auto`,
      });
    }
  }, [clientListToggle]);

  return (
    <section className="index-page__clients w-full relative mb-v10">
      <header className="grid mb-v7 xs:mb-v10">
        <h2 className="grid-end-1 xs:grid-end-12 f1">
          Clients and collaborators.
        </h2>
      </header>

      <div
        className="clients__overflow overflow-hidden"
        style={clientListStyles}
      >
        <ul className="grid" ref={clientsList}>
          {clients.map((client: ClientDto) => {
            return (
              <li key={`client-${client.id}`} className="client border-b pb-2">
                {/* <img
                  src="https://www.loveandmoney.agency/uploads/clients/pepsico.svg"
                  alt={client.title}
                /> */}
                {/* <img src="https://s.cdpn.io/3/kiwi.svg" /> */}
                <img
                  src={commonUtil.GetImagePath(client.logo)}
                  alt={client.title}
                />

                <h3 className="caption">{client.title}</h3>
              </li>
            );
          })}
        </ul>
      </div>

      {device !== `desktop` && (
        <div className="w-full flex items-center justify-center mt-v10">
          <Button
            className="relative flex items-center justify-center"
            color="white"
            onClick={() => {
              setClientListToggle(!clientListToggle);
            }}
          >
            See {clientListToggle ? `less` : `more`}
          </Button>
        </div>
      )}
    </section>
  );
};

export default ClientLogos;

ClientLogos.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.object).isRequired,
};
