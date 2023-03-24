import './css/action-bar.css';
import { useActions } from '../hooks/use-actions';
import Button from './utility/button';
import Icon from './utility/icon';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();
  const buttonClass = 'is-primary is-small';

  return (
    <div className='action-bar'>
      <Button onClick={() => moveCell(id, 'up')} className={buttonClass}>
        <Icon icon='fas fa-arrow-up' />
      </Button>
      <Button onClick={() => moveCell(id, 'down')} className={buttonClass}>
        <Icon icon='fas fa-arrow-down' />
      </Button>
      <Button onClick={() => deleteCell(id)} className={buttonClass}>
        <Icon icon='fas fa-times' />
      </Button>
    </div>
  );
};

export default ActionBar;
