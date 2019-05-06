import { Input } from 'antd';
import React, { useState } from 'react';
import { getHospitalDetail } from '../../service/hospitalCode';
import style from './index.module.scss';
import { hospitalProps } from './interface';
const Search = Input.Search;
const HospitalSearch = (props: hospitalProps) => {
  let [validateInput, setValidateInput] = useState(0);
  let { getData } = props;
  let handleChange = (e: any) => {
    let val = e.target.value;
    if (!val) {
      setValidateInput(1);
      return;
    }
    setValidateInput(0);
  };
  let handleSearch = async (val: string) => {
    if (validateInput === 0) {
      let dataSource = await getHospitalDetail(val);
      getData(dataSource);
    } else {
      return;
    }
  };
  return (
    <div className={style.input}>
      <Search
        placeholder="请输入医院名称"
        onSearch={handleSearch}
        allowClear={true}
        enterButton
        autoComplete="off"
        onChange={handleChange}
        className={validateInput === 0 ? '' : 'has-error'}
      />
      <div
        className={style['input-explain'] + ' ' + (validateInput === 1 ? style['input-error'] : '')}
      >
        医院名称不能为空
      </div>
    </div>
  );
};
export default HospitalSearch;
