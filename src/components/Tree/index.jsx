import React,{ useState } from 'react'
import { Button, Row,Input, Tree,Popover  } from 'antd';
import { SearchOutlined,PlusOutlined,MoreOutlined } from '@ant-design/icons';

const PopoverContent  = (props) => {
    const { title, id } = props;
    return (
        <div>
            <p>新增子目录</p>
            <p>编辑</p>
            <p>删除</p>
        </div>
    );
};

const TreeTitle = (props) => {
    const { title, id } = props;
    return (
      <>
        <span>{title}</span>
        {id === 'root' ? null : (
          <Popover
            content={<PopoverContent id={id} title={title} />}
            placement="rightTop"
          >
            <MoreOutlined className="icon-operate" />
          </Popover>
        )}
      </>
    );
  };
  

export default function TreeNode(props) {
    const { treeData } = props;
    // 加工后端返回的treedata，给title加上hover显示图标
    const gernerateTreeData = (data) => {
        data = data.map((item) => {
          if (item.children && item.children.length) {
            return {
              key: item.key,
              title: <TreeTitle title={item.title} id={item.key} />,
              children: gernerateTreeData(item.children),
            };
          } else {
            return {
              key: item.key,
              title: <TreeTitle title={item.title} id={item.key} />,
            };
          }
        });
        return data;
      };
    const [isEditing,setIsEditing] = useState(true);
    const [expandedKeys,setExpandedKeys] = useState([]);
    const handleSearch = () => {
         
    };
    const showAddConfirm = () => {
         
    };
    const expand = () => {
         
    }; 
    const select = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };
  
    return (
        <div style={{ height: '100%', paddingTop: '20px' }}>
            <Row justify="space-between">
                <Input
                    prefix={<SearchOutlined style={{ color: '#ddd' }} />}
                    style={{ marginLeft: '10px', marginBottom: '10px', width: '120px' }}
                    size="small"
                    allowClear
                    onChange={handleSearch}
                />
                <Button
                    style={{ marginRight: '5px' }}
                    size="small"
                    onClick={() => showAddConfirm('add')}
                    disabled={isEditing}
                >
                    <PlusOutlined />
                </Button>
            </Row>

            {treeData.length ? (
            <Tree
                style={{ marginLeft: '8px' }}
                treeData={gernerateTreeData(treeData)}
                showIcon={false}
                expandedKeys={expandedKeys}
                onExpand={expand}
                onSelect={select}
            ></Tree>
            ) : null}
      </div>

    )
}
