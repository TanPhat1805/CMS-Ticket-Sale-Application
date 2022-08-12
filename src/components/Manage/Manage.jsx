import React from 'react';
import { Table, Space, Tag } from 'antd';
import './../style.scss';

import Search from "../../assets/img/search.png"; 
import Filter from "../../assets/img/filter.png"; 

import { data } from './../data';
import { columns } from "./../data";


export default function Manage() {
    return (
      <div className="content">
        <h1>Danh sách vé</h1>
        {/* <input className='SearchList' type="search" placeholder='Search' /> <img className='SearchIcon' src={Search} /> */}
        <div className="content__filter">
          <div className="Search">
            <input
              className="Search__text"
              type="search"
              placeholder="Tìm bằng số vé"
            />
            <button className="Search__btn search-custom">
              <img className="SearchIcon" src={Search} alt="12" />{" "}
            </button>
          </div>
          <div class="filter__icon">
              <a href="gg.com" className="buttom__filter">
                <img src={Filter} alt="icon filter" />
                <span>Lọc vé</span>
              </a>
              <a href="gg.com" className="buttom__filter">
                <span>Xuất file (.csv)</span>
              </a>
          </div>
        </div>
        <Table className="TicketList" dataSource={data} columns={columns} />
      </div>
    );
  }