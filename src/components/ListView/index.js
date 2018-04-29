import React from "react";
import withFetchOffices from "containers/Offices";
import Panel from "components/Panel";
import Spinner from "components/Spinner";
import {
  StyledListView,
  StyledListViewItem,
  StyledDelimiter,
  StyledListImage
} from "./styles";
import {
  StyledTextInfo,
  StyledAvatar,
  StyledAvatarText
} from "components/SharedStyles";

const ListView = ({ state: { offices, fetchState } }) => {
  return (
    <Panel>
      <StyledListView>
        {fetchState === "pending" ? (
          <Spinner />
        ) : (
          offices.map((office, index, { length }) => {
            return (
              <div key={office.id}>
                <StyledListViewItem>
                  <StyledListImage>
                    {office.photo !== null ? (
                      <img
                        width={70}
                        height="auto"
                        src={office.photo}
                        alt={office.name}
                      />
                    ) : (
                      <StyledAvatar>
                        <StyledAvatarText>
                          {office.name.charAt(0)}
                        </StyledAvatarText>
                      </StyledAvatar>
                    )}
                  </StyledListImage>
                  <StyledTextInfo>
                    <span>
                      <strong> {office.name} </strong>
                    </span>
                    <span> {office.description} </span>
                  </StyledTextInfo>
                </StyledListViewItem>
                {length !== index + 1 && <StyledDelimiter />}
              </div>
            );
          })
        )}
      </StyledListView>
    </Panel>
  );
};

export default withFetchOffices(ListView);
