import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Position, Toaster, Intent} from "@blueprintjs/core";
import {
    gql,
    graphql,
} from 'react-apollo';
import appConstants from "../../appConstants";

class Home extends Component {
    componentDidMount() {
        const toast = Toaster.create({
            position: Position.TOP,
        });
        const records = this.props.allRecordsQuery.allRecords;
        if (!records) {
            toast.show({message: appConstants.TOAST_NO_RECORDS, intent: Intent.DANGER});
        }
    }

    render() {

        const records = this.props.allRecordsQuery.allRecords;
        if (records && records.loading) {
            return <div>Loading</div>;
        }

        if (records && records.error) {
            return <div>Error</div>;
        }

        if (records && records.records) {
            return (
                <div>
                    {records.records.map(record => (
                        <li key={record.id}>{record.url}</li>
                    ))}
                </div>
            );
        } else {
            return (<div></div>);
        }


    }
}

Home.propTypes = {
    allRecordsQuery: PropTypes.object,
};

const ALL_RECORDS_QUERY = gql`
  query AllRecordsQuery {
    allRecords(skip:0, limit:10) {
      status
      message
      records {
        id
        url
        description
      }
    }
  }
`;

export default graphql(ALL_RECORDS_QUERY, {name: 'allRecordsQuery'})(Home);
