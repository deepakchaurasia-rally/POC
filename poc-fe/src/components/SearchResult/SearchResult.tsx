import React, { FC } from 'react';
import styled from 'styled-components'
import styles from './SearchResult.style'
import { Link } from 'react-router-dom';
import { Doctor } from '../HCPSearch/HCPSearchType';

interface SearchResultProps {
  className?: string;
  doctorList: Array<Doctor> | undefined;
  isLoading: boolean;
}

const SearchResult: FC<SearchResultProps> = (props): JSX.Element => {
  const { className, doctorList, isLoading } = props;

  return (
    <div className={className}>
      <ul>
        {doctorList?.length ? doctorList?.map((doctor: Doctor, idx: number) => {
          const { firstName, lastName, specialist, address, phoneNo, designation } = doctor;
          return (
            <li key={`${idx}-${doctor.specialist}`}>
              <div className='doc-info-wrpr'>
                <div className='doc-lft-wrpr'>
                  <div className='avatar' />
                  <div className='doc-detail'>
                    <span className='doc-name'>{lastName}, {firstName}, {designation}</span>
                    <span>{specialist}</span>
                    <span>{address}</span>
                    <span>{phoneNo} PHONE</span>
                    <Link to={'/'}>0.7 Miles Away</Link>
                    <Link to={'/'}>View Additional Location(6)</Link>
                    <Link to={'/'}>View Enrollment Info</Link>
                  </div>
                </div>
                <div className="doc-preference">
                  <span>Not Evaluated for Premium Care</span>
                  <span>Accepting All Patients</span>
                </div>
              </div>
              <div className='doc-footer'>
                <span>Office Visit - Primary Doctor -  Established Patient - Moderate Complexity</span>
              </div>
            </li>
          )
        }) : isLoading ? <p className='helper-text'>Loading Result Please Wait...</p> : <p className='helper-text'>Please click on Search to fetch Doctors</p>}
      </ul>
    </div>
  )
}

export default styled(SearchResult)`${styles}`

