import React, {Component} from 'react';
import {
    ScrollView, 
    Image, 
    Text, 
    StyleSheet, 
    ToastAndroid,
    RefreshControl
} from 'react-native';

export default class ScrollViewTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false
        }
    }

    //ScrollView使用比较简单和Android中的ScrollView比较类似，
    // 当放入其中的组件高度大于屏幕时就会开始滚动

    _onScroll() {
        //在滚动的过程中，每帧最多调用一次此回调函数。
        // 调用的频率可以用scrollEventThrottle属性来控制。
    }

    _onEndReached() {
        ToastAndroid.show("到达底部了", ToastAndroid.SHORT);
    }

    _onRefresh() {  
        this.setState({isRefreshing: true}); 
    }

    render() {

        return (
            /**
             * 属性列表: http://www.jianshu.com/p/58301af1dbf2
             */
            <ScrollView
                ref="scrollView"
                horizontal={false}//设置是否是横向滚动
                onScroll={this._onScroll}
                removeClippedSubviews={true}//实验特性，可以优化滚动性能
                showsVerticalScrollIndicator={false}//是否显示垂直滚动条
                refreshControl={  // 上拉刷新
                    <RefreshControl  
                        refreshing={this.state.isRefreshing} 
                        onRefresh={() => this._onRefresh}
                        colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}  
                        progressBackgroundColor="#ffffff"  
                    />  
                } 
            >
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
            </ScrollView>
        )
    }
}

const ScrollViewTestStyle = StyleSheet.create({
    scroll_item: {
        borderWidth: 0,
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2,},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        elevation: 3,
        overflow: 'hidden',

    },
})