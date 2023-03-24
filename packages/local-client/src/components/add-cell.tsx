import './css/add-cell.css';
import { useActions } from '../hooks/use-actions';
import Button from './utility/button';
import Icon from './utility/icon';

interface AddCellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ forceVisible, previousCellId }) => {
  const { insertCellAfter } = useActions();
  const buttonClass = 'is-rounded is-primary is-small';
  const iconClass = 'is-small';

  return (
    <div className={`add-cell ${forceVisible && 'force-visible'} `}>
      <div className='add-buttons'>
        <Button
          className={buttonClass}
          onClick={() => insertCellAfter(previousCellId, 'code')}
        >
          <Icon className={iconClass} icon='fas fa-plus' text='Code' />
        </Button>
        <Button
          className={buttonClass}
          onClick={() => insertCellAfter(previousCellId, 'text')}
        >
          <Icon className={iconClass} icon='fas fa-plus' text='Text' />
        </Button>
      </div>
      <div className='divider'></div>
    </div>
  );
};

export default AddCell;
