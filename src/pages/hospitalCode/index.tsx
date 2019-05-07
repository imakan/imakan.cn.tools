import { message, Pagination, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { getAllHospitalDetail } from '../../service/hospitalCode';
import HospitalSearch from './HospitalSearch';
import './index.less';
import { hospitalProps } from './interface.d';
const HospitalCode = (props: hospitalProps) => {
  const [tableData, setTableData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getAllHospitalDetail(currentPage, pageSize).then((data:any) => {
      setTableData(data.data);
      setTotal(data.total || 0);
    });
  }, [currentPage, pageSize]);
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
  let pageChange = (currentPage: number) => {
    setCurrentPage(currentPage);
    console.log('Page: ', currentPage);
  };
  let onShowSizeChange = (current: number, pageSize: number) => {
    setPageSize(pageSize);
    console.log(current, pageSize);
  };
  let getHospitalDetail = (dataSource: any) => {
    if (dataSource.length === 0) {
      message.info('未查询到医院信息', 0.8);
    }
    // 默认每一页的数量
    setPageSize(10);
    // 默认当前页
    setCurrentPage(1);
    setTableData(dataSource);
  };
  return (
    <React.Fragment>
      <HospitalSearch getData={getHospitalDetail} />
      <Table bordered={true} size="middle" locale={{ emptyText: '暂无医院信息' }} columns={columns} pagination={false} dataSource={tableData} />
      <Pagination
        className="tabelPagination"
        showQuickJumper
        showSizeChanger
        hideOnSinglePage
        defaultCurrent={1}
        total={total}
        current={currentPage}
        pageSize={pageSize}
        onChange={pageChange}
        onShowSizeChange={onShowSizeChange}
      />
    </React.Fragment>
  );
};
export default HospitalCode;
