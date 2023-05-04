import { DueDateOptions } from "../enums";

export const getDueDate = (dueOption: DueDateOptions): Date | undefined => {
  const CURRENT_DATE = new Date();
  switch (dueOption) {
    case DueDateOptions.TODAY:
      return CURRENT_DATE;

    case DueDateOptions.TOMORROW:
      return new Date(CURRENT_DATE.getDate() + 1);

    case DueDateOptions.NEXT_WEEK:
      return new Date(CURRENT_DATE.getDate() + 6);

    case DueDateOptions.NEXT_MONTH:
      return new Date(CURRENT_DATE.getDate() + 29);

    default:
      return undefined;
  }
};

export const DEFAULT_OPTION: Readonly<DueDateOption> = {
  key: DueDateOptions.NO_DUE_DATE,
  value: "No due date",
};

export const DUE_DATE_OPTIONS: ReadonlyArray<DueDateOption> = [
  DEFAULT_OPTION,
  { key: DueDateOptions.TODAY, value: "Today" },
  { key: DueDateOptions.TOMORROW, value: "Tomorrow" },
  { key: DueDateOptions.NEXT_WEEK, value: "Next Week" },
  { key: DueDateOptions.NEXT_MONTH, value: "Next Month" },
];
