import React,{useState}  from 'react';
import { Button, Space  } from 'antd';
import ScrollTable from '@components/ScrollTable';
import EditTree from '@components/Tree';
import './RightList.less';
const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          {
            title: '0-0-0-0',
            key: '0-0-0-0',
          },
          {
            title: '0-0-0-1',
            key: '0-0-0-1',
          },
          {
            title: '0-0-0-2',
            key: '0-0-0-2',
          },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          {
            title: '0-0-1-0',
            key: '0-0-1-0',
          },
          {
            title: '0-0-1-1',
            key: '0-0-1-1',
          },
          {
            title: '0-0-1-2',
            key: '0-0-1-2',
          },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      {
        title: '0-1-0-0',
        key: '0-1-0-0',
      },
      {
        title: '0-1-0-1',
        key: '0-1-0-1',
      },
      {
        title: '0-1-0-2',
        key: '0-1-0-2',
      },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];

export default function RightList (){
   // 页码
   const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10
    }); 
    // loading
    const [loading, setLoading] = useState(false);
    const handleTableChange = (newPagination) => {
        console.log(newPagination);
        setPagination({
            ...newPagination,
            total: dataSource.length,
        });
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },600)
    };
    const columns = [
        {
        title: '姓名', 
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
        align: 'center',
        width: 130
        },
        {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
        align: 'center',
        width: 130
        },
        {
        title: '地址1',
        dataIndex: 'address',
        key: 'address',
        align: 'center',
        },
        {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        align: 'center',
        width: 220,
        render: (_,record) => (
            <Space size="middle">
                <Button type="primary">编辑</Button>
                <Button type="danger">删除</Button>
            </Space>
        ),
        },
    ];
    let dataSource = [];
    
    for (let i = 0; i < 100; i++) {
        dataSource.push({
            key: i,
            name: `lea ${i+1}`,
            age: 25,
            address: `重庆 no. ${i}`,
        });
    }

  return (
    <div className="content">
        <div className="content-l">
            {/* <Tree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            onSelect={onSelect}
            onCheck={onCheck}
            
            /> */}
            <EditTree treeData={treeData}/>
        </div>
        <div className="content-r">
            <ScrollTable 
                pagination={pagination}
                columns={columns}
                dataSource={dataSource}
                loading={loading}
                onChange={handleTableChange}
            /> 
        </div>
    </div>
  );
};
