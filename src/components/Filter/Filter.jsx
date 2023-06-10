import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Input, Label, Container } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  const filterId = nanoid();

  return (
    <Container>
      <Label htmlFor={filterId}>
        Find contacts by name
        <Input
          name="filter"
          type="text"
          value={filter}
          onChange={onChange}
          id={filterId}
        />
      </Label>
    </Container>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
