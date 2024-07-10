export interface CronOptions {
  formInputClass: string;
  formSelectClass: string;
  formRadioClass: string;
  formCheckboxClass: string;

  defaultTime: string;
  use24HourTime: boolean;

  hideMinutesTab: boolean;
  hideHourlyTab: boolean;
  hideDailyTab: boolean;
  hideWeeklyTab: boolean;
  hideMonthlyTab: boolean;
  hideYearlyTab: boolean;
  hideAdvancedTab: boolean;

  /** hides the Seconds UI form element */
  hideSeconds: boolean;

  /** removes Seconds from the Cron expression */
  removeSeconds: boolean;

  /** removes Years from the Cron expression */
  removeYears: boolean;
}

export const defaultCronOptions: CronOptions = {
  formInputClass: "form-control cron-editor-input",
  formSelectClass: "form-select cron-editor-select",
  formRadioClass: "cron-editor-radio",
  formCheckboxClass: "form-check-input cron-editor-checkbox",

  defaultTime: "10:00:00",
  use24HourTime: true,

  hideMinutesTab: false,
  hideHourlyTab: false,
  hideDailyTab: false,
  hideWeeklyTab: false,
  hideMonthlyTab: false,
  hideYearlyTab: false,
  hideAdvancedTab: false,

  hideSeconds: true,
  removeSeconds: true,
  removeYears: true,
};
