import React from "react";
import withFetchOffices from "containers/Offices";
import Panel from "components/Panel";
import Spinner from "components/Spinner";

import {
  StyledGridView,
  StyledGridItem,
  StyledGridImage,
  StyledGridAvatar,
  StyledGridTextInfo
} from "./styles";
import { StyledAvatarText } from "components/SharedStyles";
const GridView = ({ state: { offices, fetchState } }) => {
  return (
    <Panel>
      <StyledGridView>
        {fetchState === "pending" ? (
          <Spinner />
        ) : (
          offices.map(office => {
            return (
              <StyledGridItem key={office.id}>
                <StyledGridImage>
                  {office.photo !== null ? (
                    <img
                      width={70}
                      height="auto"
                      src={office.photo}
                      alt={office.name}
                    />
                  ) : (
                    <StyledGridAvatar>
                      <StyledAvatarText>
                        {office.name.charAt(0)}
                      </StyledAvatarText>
                    </StyledGridAvatar>
                  )}
                </StyledGridImage>
                <StyledGridTextInfo>
                  <span>
                    <strong> {office.name} </strong>
                  </span>
                  <span>{office.description}</span>
                </StyledGridTextInfo>
              </StyledGridItem>
            );
          })
        )}
      </StyledGridView>
    </Panel>
  );
};

export default withFetchOffices(GridView);
