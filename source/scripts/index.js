import React from 'react'
import ReactDOM from 'react-dom'
import update from 'react-addons-update'
import {Grid,Row,Col,Thumbnail,Button} from 'react-bootstrap'
function thumbails() {
    getData(createThumbnail);
}
function createThumbnail(data) {
    var arrayList = data.map(function (item, index) {
        return (<Col key={index} xs={6} md={4}>
            <Thumbnail src={item.pictureUrl} alt="372x221">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="btn_blank">
                    <Button bsStyle="primary">Button</Button>
                    <Button bsStyle="default">Button</Button>
                </p>
            </Thumbnail>
        </Col>)
    });
    const ThumbnailInstance = React.createClass({
        render() {
            return (<Grid>
                <Row>
                    {arrayList}
                </Row>
            </Grid>);
        }
    });
    ReactDOM.render(<ThumbnailInstance />,document.getElementById("header"));
}
function getData(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../source/data/article.json", true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (typeof callback == "function") {
                callback(JSON.parse(this.responseText).list);
            }
        }
    }
    xhr.send();
}
thumbails();