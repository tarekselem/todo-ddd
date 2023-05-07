import { DueDateOptions } from "../enums";

export const getDueDate = (dueDateOption: DueDateOptions): string => {
  switch (dueDateOption) {
    case DueDateOptions.TODAY:
      return addDaysToCurrentDate(0).toISOString();

    case DueDateOptions.TOMORROW:
      return addDaysToCurrentDate(1).toISOString();
    case DueDateOptions.NEXT_WEEK:
      return addDaysToCurrentDate(7).toISOString();

    case DueDateOptions.NEXT_MONTH:
      return addDaysToCurrentDate(30).toISOString();

    default:
      return "";
  }
};

const addDaysToCurrentDate = (days: number): Date => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);
  return currentDate;
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
