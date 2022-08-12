import { Tag, Descriptions } from "antd";

const color = 'red';
export const columns = [
  {
    title: "STT",
    dataIndex: "name",
    key: "name",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Booking code",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Số vé",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tình trạng sử dụng",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 11 ? "green" : "geekblue";

          if (tag === "Hết hạn") {
            color = "red";
          }

          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Ngày sử dụng",
    key: "timein",
    dataIndex: "timein",
  },
  {
    title: "Ngày xuất vé",
    dataIndex: "timeout",
    key: "timeout",
  },
  {
    title: "Cổng check - in",
    dataIndex: "checkin",
    key: "Cổng 1",
  },
];
export const data = [
  {
    key: "1",
    name: "1",
    age: "ALT20210501",
    address: "123456789034",
    tags: ["Chưa sử dụng"],
    timein: "14/04/2021",
    timeout: "14/04/2021",
    checkin: "cổng 1",
  },
  {
    key: "2",
    name: "2",
    age: "ALT20210501",
    address: "123456789034",
    tags: ["Hết hạn"],
    timein: "14/04/2021",
    timeout: "14/04/2021",
    checkin: "-",
  },
  {
    key: "3",
    name: "3",
    age: "ALT20210501",
    address: "123456789034",
    tags: ["Đã sử dụng"],
    timein: "14/04/2021",
    timeout: "14/04/2021",
    checkin: "-",
  },
  {
    key: "3",
    name: "3",
    age: "ALT20210501",
    address: "123456789034",
    tags: ["Đã sử dụng"],
    timein: "14/04/2021",
    timeout: "14/04/2021",
    checkin: "-",
  },
  {
    key: "3",
    name: "3",
    age: "ALT20210501",
    address: "123456789034",
    tags: ["Đã sử dụng"],
    timein: "14/04/2021",
    timeout: "14/04/2021",
    checkin: "cổng 1",
  },
  {
    key: "3",
    name: "3",
    age: "ALT20210501",
    address: "123456789034",
    tags: ["Đã sử dụng"],
    timein: "14/04/2021",
    timeout: "14/04/2021",
    checkin: "cổng 1",
  },
  {
    key: "3",
    name: "3",
    age: "ALT20210501",
    address: "123456789034",
    tags: ["Đã sử dụng"],
    timein: "14/04/2021",
    timeout: "14/04/2021",
    checkin: "cổng 1",
  },
  {
    key: "3",
    name: "3",
    age: "ALT20210501",
    address: "123456789034",
    tags: ["Đã sử dụng"],
    timein: "14/04/2021",
    timeout: "14/04/2021",
    checkin: "cổng 1",
  },
  {
    key: "3",
    name: "3",
    age: "ALT20210501",
    address: "123456789034",
    tags: ["Đã sử dụng"],
    timein: "14/04/2021",
    timeout: "14/04/2021",
    checkin: "cổng 1",
  },
  {
    key: "3",
    name: "3",
    age: "ALT20210501",
    address: "123456789034",
    tags: ["Đã sử dụng"],
    timein: "14/04/2021",
    timeout: "14/04/2021",
    checkin: "cổng 1",
  },
  {
    key: "3",
    name: "3",
    age: "ALT20210501",
    address: "123456789034",
    tags: ["Đã sử dụng"],
    timein: "14/04/2021",
    timeout: "14/04/2021",
    checkin: "cổng 1",
  },
];


export const columnsSoatVe = [
  {
    title: "STT",
    dataIndex: "name",
    key: "name",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Số vé",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Ngày sử dụng",
    key: "timein",
    dataIndex: "timein",
  },
  {
    title: "Tên loại vé",
    key: "tenve",
    dataIndex: "tenve",
  },
  {
    title: "Cổng check - in",
    dataIndex: "checkin",
    key: "checkin",
  },
  {
    title: "",
    dataIndex: "status",
    key: "status",
    render: (text) => <span className="description">{text}</span>,
  },
];


export const dataSoatVe = [
  {
    key: "1",
    name: "1",
    address: "123456789034",
    timein: "14/04/2021",
    tenve: "Vé cổng",
    checkin: "cổng 1",
    status: "Chưa đối soát",
  },
  {
    key: "2",
    name: "2",
    address: "123456789034",
    timein: "14/04/2021",
    tenve: "Vé cổng",
    checkin: "cổng 1",
    status: "Chưa đối soát",
  },
  {
    key: "3",
    name: "3",
    address: "123456789034",
    timein: "14/04/2021",
    tenve: "Vé cổng",
    checkin: "cổng 1",
    status: "Chưa đối soát",
  },
  {
    key: "3",
    name: "3",
    address: "123456789034",
    timein: "14/04/2021",
    tenve: "Vé cổng",
    checkin: "cổng 1",
    status: "Chưa đối soát",
  },
  {
    key: "3",
    name: "3",
    address: "123456789034",
    timein: "14/04/2021",
    tenve: "Vé cổng",
    checkin: "cổng 1",
    status: "Chưa đối soát",
  },
  {
    key: "3",
    name: "3",
    address: "123456789034",
    timein: "14/04/2021",
    tenve: "Vé cổng",
    checkin: "cổng 1",
    status: "Chưa đối soát",
  },
  {
    key: "3",
    name: "3",
    address: "123456789034",
    timein: "14/04/2021",
    tenve: "Vé cổng",
    checkin: "cổng 1",
    status: "Chưa đối soát",
  },
  {
    key: "3",
    name: "3",
    address: "123456789034",
    timein: "14/04/2021",
    tenve: "Vé cổng",
    checkin: "cổng 1",
    status: "Chưa đối soát",
  },
  {
    key: "3",
    name: "3",
    address: "123456789034",
    timein: "14/04/2021",
    tenve: "Vé cổng",
    checkin: "cổng 1",
    status: "Chưa đối soát",
  },
  {
    key: "3",
    name: "3",
    address: "123456789034",
    timein: "14/04/2021",
    tenve: "Vé cổng",
    checkin: "cổng 1",
    status: "Chưa đối soát",
  },
  {
    key: "3",
    name: "3",
    address: "123456789034",
    timein: "14/04/2021",
    tenve: "Vé cổng",
    checkin: "cổng 1",
    status: "Chưa đối soát",
  },
];