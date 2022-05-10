import { Fragment } from "react";
import List from "../components/List/List";

const ListPage = (props) => {
  return (
    <Fragment>
      <List list={props.list} />
    </Fragment>
  );
};

export default ListPage;
