import React, { Component } from 'react';
import axios from 'axios';
import BlogView from '../views/blog/BlogView';
import { LookupTag } from '../lookups/LookupTag';
import { URLMap } from '../utils/URLMap';

class BaseBlogController extends Component {
    constructor(props, opts) {
        super(props);
        this.opts = opts;

        this.state = {
            data: [],
            noData: false
        };
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: this.opts.URLMap.api.articleList(),
            headers: { 'Cache-Control': 'no-cache', 'pragma': 'no-cache' },
            params: {
                TagIds: LookupTag.blog.id,
                pageSize: 999,
                _: new Date().getTime()
            }
        }).then(response => {
            if(response.data.result && response.data.result.contents.length) {
                this.setState({ data: response.data.result.contents });
            } else {
                this.setState({ noData: true });
            }
        });
    }

    render() {

        return (
            <this.opts.BlogView
                {...this.state}
            />
        )
    }

}

export default class BlogController extends BaseBlogController {
    constructor(props) {
        super(props, {
            URLMap: URLMap,
            BlogView: BlogView
        });
    }
}
