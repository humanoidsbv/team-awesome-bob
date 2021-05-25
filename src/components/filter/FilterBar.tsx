import React, { useState, useContext } from "react";
import FilterInput from "./FilterInput";

import { StoreContext } from "../../stores/ContextLoader";
import * as Type from "../../types/types";
import * as Styled from "./FilterBar.styled";
import FilterDropDown from "./FilterDropDown";
import TeamMembers from "../../../pages/team-members";

interface FilterBarProps {
  content: Type.TeamMember[];
  activePage: string;
  count?: number;
}

interface filterValueProps {
  locality: string;
  name: string;
}

function FilterBar({ content, count, activePage }: FilterBarProps) {
  const store = useContext(StoreContext);
  const [filterOptions, setFilterOptions] = store.filterOptions;

  const handleChange = (event) => {
    setFilterOptions({ ...filterOptions, [event.target.id]: event.target.value });
    console.log(event.target.id, event.target.value);
  };

  return (
    <Styled.FilterBar activePage={activePage}>
      <Styled.FilterBarContent>
        <Styled.PageTitle>{activePage}</Styled.PageTitle>
        <Styled.FilterDivider />
        <Styled.TeamMemberCount> {count} entries</Styled.TeamMemberCount>
        <FilterDropDown
          id="locality"
          inputValue=""
          labelValue={"Filter Locality"}
          teamMembers={content}
          handleChange={handleChange}
        ></FilterDropDown>
        {/* <FilterInput id="Search" type="select" inputValue={"Search"} labelValue="" onChange={""} /> */}
      </Styled.FilterBarContent>
    </Styled.FilterBar>
  );
}
export default FilterBar;
