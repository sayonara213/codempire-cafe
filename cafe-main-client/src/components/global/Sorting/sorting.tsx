import { ActionMeta, StylesConfig } from 'react-select';
import { OptionType } from '../../../types/types.select';
import { SortingSelect } from './sorting.styled';

const customStyles: StylesConfig<unknown, boolean> = {
  control: (provided) => ({
    ...provided,
    width: '100%',
    background: 'none',
    border: 'none',
    boxShadow: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'black' : 'white',
    color: state.isFocused ? 'white' : 'black',
    ':hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'black',
  }),
};

interface SortingProps {
  options: OptionType[];
  defaultValue: OptionType;
  onChange: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void;
}

const GlobalSorting: React.FC<SortingProps> = ({ options, defaultValue, onChange }) => {
  return (
    <SortingSelect
      options={options}
      styles={customStyles}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default GlobalSorting;
