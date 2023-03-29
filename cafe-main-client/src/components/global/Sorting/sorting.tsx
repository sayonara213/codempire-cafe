import { SortingSelect } from './sorting.styled';

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: '100%',
    background: 'none',
    border: 'none',
    boxShadow: 'none',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'black' : 'white',
    color: state.isFocused ? 'white' : 'black',
    ':hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'black',
  }),
};

interface SortingProps {
  options: any;
  defaultValue: any;
  onChange: (change: any) => any;
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
