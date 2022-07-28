import React,{useState,useEffect}  from 'react';
import { Button, Form, Input, Select,DatePicker  } from 'antd';
import Dialog from '@components/Dialog';
const { Option } = Select;
 
export default function List(props) {
    // 弹窗
    const [visible, setVisible] = useState(false);
    const [row, setRow] = useState(null);
    useEffect(()=>{
        setVisible(props.visible);
        setRow(props.row);
    },[props])

    const [form] = Form.useForm(); 
     
    const changeSex = (value) => {
        console.log('value of sex: ', value);
    };
    const onChangeDate = (value, dateString) => {
        console.log('Formatted Selected Time: ', dateString);
    };
      
    const onOkDate = (value) => {
        console.log('onOk: ', value);
    };  

    const handleOkDialog = (e) => {
        console.log('handleOkDialog');
        setVisible(false);
    };

    const handleCancelDialog = (e) => {
        console.log('handleOkDialog');
        setVisible(false);
    };

    const onNext = async () => {
        try {
          const values = await form.validateFields();
          console.log('Success:', values);
        } catch (errorInfo) {
          console.log('Failed:', errorInfo);
        }
      };
    
    return (  
        <Dialog 
        title='新增'
        visible={visible}
        width={800}
        onOk={handleOkDialog}
        onCancel={handleCancelDialog}
        showFooter={false}>
            <>
                <div className="dialog-content">
                    <Form style={{marginBottom:'20px'}} form={form} labelWrap={true}
                    initialValues={{
                        'sex': '1'
                    }}> 
                        <Form.Item name="username" label="姓名" rules={[{ required: true, message: '请输入姓名' }]}>
                            <Input style={{width:220}} placeholder="请输入姓名" />
                        </Form.Item>
                        <Form.Item name="sex" label="性别">
                            <Select placeholder="请选择性别" style={{width:220}} onChange={changeSex}>
                                <Option value="1">男</Option>
                                <Option value="0">女</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="born-time" label="出生年月">
                            <DatePicker  style={{width:220}} showTime onChange={onChangeDate} onOk={onOkDate} />
                        </Form.Item>
                        <Form.Item name="username" label="姓名" rules={[{ required: true, message: '请输入姓名' }]}>
                            <Input style={{width:220}} placeholder="请输入姓名" />
                        </Form.Item>
                    </Form> 
                </div>    
                <div className="dialog-footer-container">
                    <Button type="primary">上一步</Button>
                    <Button type="error" onClick={onNext}>下一步</Button>    
                    <Button>取消</Button>    
                </div>
            </>
        </Dialog>
    )
}
