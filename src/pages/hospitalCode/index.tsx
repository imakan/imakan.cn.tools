import { message, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { getAllHospitalDetail } from '../../service/hospitalCode';
import HospitalSearch from './HospitalSearch';
import './index.less';
import { hospitalProps } from './interface.d';
const HospitalCode = (props: hospitalProps) => {
  const [tableData, setTableData] = useState();
  const [loadding, setLoading] = useState(false);
  useEffect(() => {
    getAllHospitalDetail().then((dataSource) => {
      setTableData(dataSource);
    });
  }, []);
  const columns = [
    { title: '编码', dataIndex: 'hospitalCode', key: 'code' },
    {
      title: '医院名称',
      dataIndex: 'hospitalName',
      key: 'hospitalName',
      className: 'hospitalNameClass'
    },
    { title: '所属区县', dataIndex: 'county', key: 'county' },
    { title: '医院类别', dataIndex: 'type', key: 'type' },
    { title: '医院等级', dataIndex: 'level', key: 'level' },
    { title: '医院地址', dataIndex: 'address', key: 'address', className: 'hospitalAddressClass' }
  ];
  let getHospitalDetail = (dataSource: any) => {
    if (dataSource.length === 0) {
      message.info('未查询到医院信息', 0.8);
    }
    setTableData(dataSource);
  };
  return (
    <React.Fragment>
      <HospitalSearch getData={getHospitalDetail} />
      <Table
        bordered={true}
        size="middle"
        locale={{ emptyText: '暂无医院信息' }}
        columns={columns}
        dataSource={tableData}
      />
    </React.Fragment>
  );
};
export default HospitalCode;
