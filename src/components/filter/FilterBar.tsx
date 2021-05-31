import React from "react";
import FilterInput from "./FilterInput";

import * as Styled from "./FilterBar.styled";
import FilterDropDown from "./FilterDropDown";

interface FilterBarProps {
  content?: any;
  activePage: string;
  filterFields: string[];
  handleChange: Function;
  handleNameFilter?: Function;
}

function FilterBar({
  filterFields,
  content,
  activePage,
  handleChange,
  handleNameFilter,
}: FilterBarProps) {
  return (
    <Styled.FilterBar activePage={activePage}>
      <Styled.FilterBarContent>
        <Styled.PageTitle>{activePage}</Styled.PageTitle>
        <Styled.FilterDivider />
        <Styled.ItemCount>
          {`${content?.length} `}
          entries
        </Styled.ItemCount>

        {filterFields.map((field) => (
          <FilterDropDown
            key={field}
            id={field}
            labelValue={field.charAt(0).toUpperCase() + field.slice(1)}
            content={content}
            handleChange={handleChange}
          />
        ))}

        <FilterInput id="name" type="search" labelValue="Name" onChange={handleNameFilter} />
      </Styled.FilterBarContent>
    </Styled.FilterBar>
  );
}
export default FilterBar;
