import { BaseFilter } from '../../../shared/filters/filter/base-filter';
import { FilterDef, FilterType } from '../../../types/Filters';
import { KeyValue } from '../../../types/GlobalType';

export class UserTechnicalFilter extends BaseFilter {
  public constructor(defaultValue = false) {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'technical',
      httpId: 'Technical',
      type: FilterType.DROPDOWN,
      multiple: true,
      exhaustive: true,
      name: 'users.technical_user',
      class: 'col-md-6 col-lg-3 col-xl-2',
      label: 'users.technical',
      cleared: true,
      currentValue: defaultValue,
      items: Object.assign([], technicalValues),
    };
    this.setFilterDef(filterDef);
  }
}

export const technicalValues: KeyValue[] = [
  { key: 'true', value: 'users.technical_user' },
  { key: 'false', value: 'users.non_technical_user' },
];
