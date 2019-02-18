import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 240px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    cursor: pointer;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    background: #f7f7f7;
    padding-right: 10px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const TopicItemMore = styled.a`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    font-size: 14px;
    color: #969696;
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommandWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommandItem = styled.div`
    cursor: pointer;
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imageUrl});
    background-size: contain;
`;

export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;

export const WriteerItem = styled.div`
    height: 40px;
    line-height: 18px;
    margin-Top: 10px;
    margin-bottom: 10px;
    padding-right: 10px;
    .topic-pic{
        border-radius: 50%;
        display: block;
        float: left;
        width: 40px;
        height: 40px;
        margin-left: 10px;
        margin-Top: -5px;
    }
    .name {
        color: #000;
        font-size: 14px;
    }
    .desc {
        color: #969696;
        font-size: 10px;
    }
    border-bottom: 1px solid #dcdcdc;
`;

export const LoadMore = styled.div`
    width: 100%;
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    color: #fff;
    text-align:center;
    border-radius: 20px;
`;

export const BackTop = styled.div`
    top: 500px;
    position: fixed;
    width: 60px;
    right: 100px;
    cursor: pointer;
    height: 60px;
    line-height: 60px;
    background: #fff;
    color: #000;
    font-size: 10px;
    text-align:center;
    border: 1px solid #dcdcdc;
    &:hover{
        background: #969696;
    }
`;