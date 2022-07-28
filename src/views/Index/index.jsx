import React from 'react'
import { getStudent,getUser } from '@apis/jd-car-user/user'


export default function index() {
    let menuList=[];
    const handleMock=()=>{ 
        getUser().then(res=>{
            // menuList = treeMenu(res.data,'');
            menuList = toTree(res.data);
            // console.log({menuList});
        })
    }
    const handleGet=()=>{ 
        getStudent(123).then(res=>{
            console.log(res);
        })
    }
    // 普通数组转tree数组结构----递归实现
    const treeMenu=(list,root)=>{ 
         let arr=[];
         list.forEach(item=>{
             if(item.pid === root){
                 const children = treeMenu(list,item.id);
                 if(children.length>0){
                     item.children=children;
                 }
                 arr.push(item);
             }
         })
         return arr;
    }
    // 普通数组转tree数组结构----map实现
    const toTree = (data)=>{
        let arr = [];   
        let map = {};

        data.forEach(item => {
            delete item.children;  //删除item下的children，以防多次调用
        });
        data.forEach(item => {
            map[item.id] = item;
        }); 
        
        data.forEach(item => {
            let parent = map[item.pid];  //判断item的pid是否是否存在map中
            if (parent) {  //如果存在说明自己不是顶层数据
                (parent.children || (parent.children = [])).push(item)
            }else {
                arr.push(item)  // 如果不存在 则是顶层数据
            }
        });
        return arr;
    }
      
    return (
        <div>
            <button onClick={handleGet}>get 请求</button>
            <button onClick={handleMock}>mock 请求</button>
        </div>
    )
}
