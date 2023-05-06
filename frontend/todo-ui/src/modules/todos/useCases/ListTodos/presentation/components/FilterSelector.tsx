import { useState } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import {
  FiltersOptions,
  useQueryFiltersStore,
} from "@modules/todos/application";
import { DEFAULT_FILTER_OPTION, FILTER_OPTIONS } from "../../constants";

const FilterSelector = () => {
  const [selectedOption, setSelectedOption] = useState(DEFAULT_FILTER_OPTION);
  const setFilter = useQueryFiltersStore((store) => store.setFilter);

  const handleSelection = (selectedOption: FilterOption) => {
    setSelectedOption(selectedOption);
    setFilter(selectedOption.key as FiltersOptions);
  };

  return (
    <Menu>
      <MenuButton
        w="100%"
        marginRight={0}
        marginLeft={2}
        size="sm"
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {selectedOption.value}
      </MenuButton>
      <MenuList p={0} minW="0" w={120}>
        {FILTER_OPTIONS.map((option) => (
          <MenuItem key={option.key} onClick={() => handleSelection(option)}>
            {option.value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FilterSelector;
