import React from 'react';
import Header from './header';
import { loginLog } from '../api-service';
import { useEffect } from 'react';
import { useState } from 'react';

const Loginlog = () => {
  const [data,setData]         = useState([]);

  useEffect(() => {
    loginLog({
      page: 1,
      pageSize: 50,
      skip: 0,
      take: 50,
      token: localStorage.getItem('token')
    }).then((data) => {
        console.log("data",data.data);
        setData(data?.data?.data)
    })
    .catch((error) => {
      console.log("error", error);
    });
  },[]);


  return (
    <>
    <Header></Header>
      <div className='page_content ' style={{ minHeight: '882px' }}>
        <section className='upper_section'>
          <div className='container-fluid'>
            <div className='d-flex align-items-center justify-content-between'>
              <h4>Sign-In Log</h4>
            </div>
          </div>
        </section>
        <section className='lower_section listing_sec'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12 custom-table'>
                <div id='grid' data-role='grid' className='k-grid k-widget k-display-block k-reorderable'>
                  <div className='k-grid-header' style={{ paddingRight: '17px' }}>
                    <div className='k-grid-header-wrap k-auto-scrollable' data-role='resizable'>
                      <table role='grid'>
                        <thead role='rowgroup'>
                          <tr role='row'>
                            <th scope='col' role='columnheader' data-field='name' aria-haspopup='true' data-title='date' data-index='0' id='ec009f59-8abe-4a71-9f62-c2dafa4a039b' className='text-string k-header' data-role='columnsorter' title='Name'>
                               Date
                            </th>
                            <th scope='col' role='columnheader' data-field='created' aria-haspopup='true' data-title='customer' data-index='1' id='19074e66-33dd-4dbc-8b01-0fe4a16c9af3' className='text-date k-header' data-role='columnsorter'>
                              Customer
                            </th>
                            <th scope='col' role='columnheader' data-field='subject' aria-haspopup='true' data-title='access' data-index='2' id='e90c5369-e841-4d34-8973-af00e4d63b73' className='text-string k-header' data-role='columnsorter' title='Subject'>
                              Access
                            </th>
                            <th scope='col' role='columnheader' data-field='message' aria-haspopup='true' data-title='ipaddress' data-index='3' id='54988a32-5eac-46fe-bed5-b910b36b734c' className='text-string k-header' data-role='columnsorter'>
                                IP Address
                            </th>
                            <th scope='col' role='columnheader' data-field='message' aria-haspopup='true' data-title='os' data-index='3' id='54988a32-5eac-46fe-bed5-b910b36b734c' className='text-string k-header' data-role='columnsorter'>
                                OS
                            </th>
                            <th scope='col' role='columnheader' data-field='message' aria-haspopup='true' data-title='browser' data-index='3' id='54988a32-5eac-46fe-bed5-b910b36b734c' className='text-string k-header' data-role='columnsorter'>
                               Browser
                            </th>
                          </tr>
                        </thead>
                      </table>
                      <div className='k-resize-handle' style={{ top: '0.5px', left: ' 465px', height: ' 46px', width: '9px', display: 'block' }}>
                        <div className='k-resize-handle-inner'></div>
                      </div>
                    </div>
                  </div>
                  <div className='k-grid-content k-auto-scrollable'>
                    <table role='grid'>
                      <tbody role='rowgroup'>
                      {
                            data.map((value,key) => {
                                return (
                                  <tr className='k-alt' role='row' key={key}>
                                    <td className='text-string'>{value.date}</td>
                                    <td className='text-string'>{value.contact}</td>
                                    <td className='text-string'>{value.access}</td>
                                    <td className='text-string'>{value.ipaddress}</td>
                                    <td className='text-string'>{value.os}</td>
                                    <td className='text-string'>{value.browser}</td>
                                 </tr>
                              )
                            })
                        }
                      </tbody>
                    </table>
                  </div>

                  <div className='k-pager-wrap k-grid-pager k-widget k-floatwrap' data-role='pager'>
                    <a href='#' aria-label='Go to the first page' title='Go to the first page' className='k-link k-pager-nav k-pager-first k-state-disabled' data-page='1'>
                      <span className='k-icon k-i-arrow-end-left'></span>
                    </a>

                    <a href='#' aria-label='Go to the previous page' title='Go to the previous page' className='k-link k-pager-nav k-state-disabled' data-page='1'>
                      <span className='k-icon k-i-arrow-60-left'></span>
                    </a>

                    <span className='k-pager-input k-label'>
                      Page
                      <input className='k-textbox k-state-disabled' aria-label='0' disabled='disabled' />
                      of 0
                    </span>

                    <a href='#' aria-label='Go to the next page' title='Go to the next page' className='k-link k-pager-nav k-state-disabled' data-page='0'>
                      <span className='k-icon k-i-arrow-60-right'></span>
                    </a>
                    <a href='#' aria-label='Go to the last page' title='Go to the last page' className='k-link k-pager-nav k-pager-last k-state-disabled' data-page='0'>
                      <span className='k-icon k-i-arrow-end-right'></span>
                    </a>
                    <span className='k-pager-sizes k-label'>
                      <span title='' className='k-widget k-dropdown k-header'>
                        <span unselectable='on' className='k-dropdown-wrap k-state-default'>
                          <span unselectable='on' className='k-input'>
                            50
                          </span>
                          <span unselectable='on' className='k-select' aria-label='select'>
                            <span className='k-icon k-i-arrow-60-down'></span>
                          </span>
                        </span>
                        <select data-role='dropdownlist' aria-label='50' style={{ display: ' none' }}>
                          <option value='50'>50</option>
                          <option value='100'>100</option>
                          <option value='200'>200</option>
                          <option value='500'>500</option>
                        </select>
                      </span>
                      Records per page
                    </span>
                    <a href='#' className='k-pager-refresh k-link' title='Refresh' aria-label='Refresh'>
                      <span className='k-icon k-i-reload'></span>
                    </a>

                    <span className='k-pager-info k-label'>No records available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Loginlog;
