import React from 'react'
import ReactDOM from 'react-dom'
import update from 'react-addons-update'
import Bootstrap from 'react-bootstrap'
var Grid = Bootstrap.Grid;
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Thumbnail = Bootstrap.Thumbnail;
var Button = Bootstrap.Button;
function thumbails() {
    const ThumbnailInstance = React.createClass({
        render() {
            const el = getData(createThumbnail);
            return (<Grid>
                <Row>
                    {el}
                </Row>
            </Grid>);
        }
    });

}
function createThumbnail(data) {
    const arrayList = data.map(function (item, index) {
        return (<Col key={index} xs={6} md={4}>
            <Thumbnail src={item.pictureUrl} alt="372x221">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>
                    <Button bsStyle="primary">Button</Button>;
                        <Button bsStyle="default">Button</Button>
                </p>
            </Thumbnail>
        </Col>)
    });
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