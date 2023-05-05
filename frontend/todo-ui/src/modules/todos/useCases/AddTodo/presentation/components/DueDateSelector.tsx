import { useState } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { DEFAULT_OPTION, DUE_DATE_OPTIONS } from "@modules/todos/domain/utils";

interface Props {
  selectionChanged: (selectedOption: DueDateOption) => void;
}

const DueDateSelector = ({ selectionChanged }: Props) => {
  const [selectedDueDate, setSelectedDueDate] = useState(DEFAULT_OPTION);

  const handleSelection = (selectedOption: DueDateOption) => {
    setSelectedDueDate(selectedOption);
    selectionChanged(selectedOption);
  };

  return (
    <Menu>
      <MenuButton
        w="100%"
        borderRadius={20}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {selectedDueDate.value}
      </MenuButton>
      <MenuList maxWidth={20}>
        {DUE_DATE_OPTIONS.map((option) => (
          <MenuItem key={option.key} onClick={() => handleSelection(option)}>
            {option.value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DueDateSelector;
