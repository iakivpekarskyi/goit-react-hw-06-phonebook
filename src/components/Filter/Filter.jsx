import { FilterWrap } from './Filter.styled';
import { FilterInput } from './Filter.styled';
import { useContacts } from 'hooks/useContact';

export const Filter = () => {
  const { filter, showFilter } = useContacts();

  const onFilterChange = event => {
    showFilter(event.target.value);
  };

  return (
    <FilterWrap>
      <FilterInput
        type="text"
        placeholder="Search for contact"
        value={filter}
        onChange={onFilterChange}
      ></FilterInput>
    </FilterWrap>
  );
};
