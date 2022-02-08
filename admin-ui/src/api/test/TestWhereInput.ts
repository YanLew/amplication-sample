import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TestWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  startDate?: DateTimeNullableFilter;
};
