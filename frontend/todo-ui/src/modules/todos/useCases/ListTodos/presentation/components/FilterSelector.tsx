import { useState } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { DEFAULT_FILTER_OPTION, FILTER_OPTIONS } from "../../constants";

interface Props {
  selectionChanged: (selectedOption: FilterOption) => void;
}

const FilterSelector = ({ selectionChanged }: Props) => {
  const [selectedOption, setSelectedOption] = useState(DEFAULT_FILTER_OPTION);

  const handleSelection = (selectedOption: FilterOption) => {
    setSelectedOption(selectedOption);
    selectionChanged(selectedOption);
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
