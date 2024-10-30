import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';


const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFoundUser = event => {
    const form = event.target;
    dispatch(changeFilter(form.value.toLowerCase()));
  };
  return (
    <div className={s.sbox}>
      <label>
        Find contact by name
        <input
          className={s.sinput}
          type='text'
          onChange={handleFoundUser}
        />
      </label>
    </div>
  );
};
export default SearchBox;