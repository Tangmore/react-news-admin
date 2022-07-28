import request from '@/http';
import '@/mock'
// MOCK
export function getUser() {
  return request({
    url: '/menuList',
    method: 'get'
  });
} 

// 申请单详情
export function getStudent(procId) {
  return request({
    url: '/ajax/comingList?ci=236&limit=10&movieIds=&token=&optimus_uuid=53D982E0BB3411EC8ECD334B3F83289E1602AC03A72F45D3BF85074D843147F0&optimus_risk_level=71&optimus_code=10',
    method: 'get',
    params: { procId }
  });
}
