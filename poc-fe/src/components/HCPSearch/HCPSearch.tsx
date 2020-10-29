import React, { FC, useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import styles from './HCPSearch.style'
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import SearchResult from '../SearchResult';
import { getDoctorsDetail } from '../../utils/getData';
import { Props, Doctor } from './HCPSearchType';

const HCPSearch: FC<Props> = (props): JSX.Element => {
  const { className } = props;
  const [doctorsList, setDoctors] = useState<Array<Doctor>>([]);
  const [isLoading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const getMeDoctors = () => {
    setLoading(true);
    getDoctorsDetail().then((data: any): void => {
      setDoctors(data);
    })
  }

  const onFilter = (event: any) => {
    setSearchQuery(event.target.value);
  }

  return (
    <div className={className}>
      <div className="header">
        <Link to={'/'}>Rally Health India</Link>
        <Button label="Profile" />
      </div>
      <h2>Who are you looking for?</h2>
      <div className="src-wrpr">
        <Input placeholder={'Search for health care providers...'} onChange={onFilter} />
        < Button label={'Search'} onClick={getMeDoctors} />
      </div>
      <SearchResult doctorList={doctorsList} isLoading={isLoading} filter={searchQuery} />
    </div>
  )
}

export default styled(HCPSearch)`${styles}`

