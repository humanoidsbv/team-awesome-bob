import React, { useContext } from "react";
import FilterInput from "./FilterInput";

import { StoreContext } from "../../stores/ContextLoader";
import * as Type from "../../types/types";
import * as Styled from "./FilterBar.styled";
import FilterDropDown from "./FilterDropDown";

interface FilterBarProps {
  content: Type.TeamMember[];
  activePage: string;
  count?: number;
}

function FilterBar({ content, count, activePage }: FilterBarProps) {
  const store = useContext(StoreContext);
  const [filterOptions, setFilterOptions] = store.teamMemberFilter;

  const handleChange = (event) => {
    setFilterOptions({
      ...filterOptions,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <Styled.FilterBar activePage={activePage}>
      <Styled.FilterBarContent>
        <Styled.PageTitle>{activePage}</Styled.PageTitle>
        <Styled.FilterDivider />
        <Styled.TeamMemberCount>
          {count}
          entries
        </Styled.TeamMemberCount>
        <FilterDropDown
          id="locality"
          labelValue="Locality"
          teamMembers={content}
          handleChange={handleChange}
        />
        <FilterInput id="firstName" type="select" labelValue="Name" onChange={handleChange} />
      </Styled.FilterBarContent>
    </Styled.FilterBar>
  );
}
export default FilterBar;
