import React,{useState}  from 'react';
import { Button, Form, Input, Select,DatePicker,Space  } from 'antd';
import ScrollTable from '@components/ScrollTable';
import EditDialog from '@components/EditDialog';
const { Option } = Select;
 
export default function List() {
    const [form] = Form.useForm(); 
    const onFinish = (values) => {
        console.log('values of form: ', values);
    };
    const changeSex = (value) => {
        console.log('value of sex: ', value);
    };
    const onChangeDate = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };
      
    const onOkDate = (value) => {
        console.log('onOk: ', value);
    };
    // 表格高度

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
                 {/* {record.name} */}
                <Button type="primary"  onClick={()=>{showModal(record)}}>编辑</Button>
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
    // 弹窗
    const [visible, setVisible] = useState(false);
    const [row, setRow] = useState(null);

    const showModal = (record) => {
        console.log(record);
        setRow(record);
        setVisible(true);
    }; 
    
    return (
        <div className="content"> 
            <Form style={{marginBottom:'20px'}} layout="inline" form={form} onFinish={onFinish}
            initialValues={{
                'sex': '1'
            }}> 
                <Form.Item name="username" label="姓名" rules={[{ required: true, message: '请输入姓名' }]}>
                    <Input placeholder="请输入姓名" />
                </Form.Item>
                <Form.Item name="sex" label="性别">
                    <Select placeholder="请选择性别" style={{width:200}} onChange={changeSex}>
                        <Option value="1">男</Option>
                        <Option value="0">女</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="born-time" label="出生年月">
                    <DatePicker showTime onChange={onChangeDate} onOk={onOkDate} />
                </Form.Item>
                
                <Form.Item>
                    <Button type="primary" htmlType="submit" size="middle">查询</Button>
                </Form.Item>
                {/* 弹窗 */} 
                <EditDialog visible={visible} row={row}/>

                {/* 删除确认窗 */}
                
            </Form> 
            <ScrollTable 
                pagination={pagination}
                columns={columns}
                dataSource={dataSource}
                loading={loading}
                onChange={handleTableChange}
            />   
        </div>
    )
}
