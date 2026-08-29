import { parseISO, format } from 'date-fns';

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return <time title={format(date, 'EEEE do LLLL yyyy, h:mm b')} dateTime={dateString}>{format(date, 'd LLLL yyyy')}</time>;
};

export default DateFormatter;
