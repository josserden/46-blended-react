import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    isVisible: false,
  };

  // componentDidMount() {
  //   const { page, query } = this.state;
  //   this.getPhotos(page, query);
  // }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.page !== page || prevState.query !== query) {
      this.getPhotos(query, page);
    }
  }

  getPhotos = (query, page) => {
    ImageService.getImages(query, page).then(data => {
      this.setState(prevState => ({
        images: [...prevState.images, ...data.photos],
        isVisible: data.page < Math.ceil(data.total_results / data.per_page),
      }));
    });
  };

  onLoadMore = e => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log(this.state.page);
  };

  handleFormSubmit = data => {
    this.setState({ query: data, images: [], page: 1 });
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleFormSubmit} />

        <Grid>
          {this.state.images.map(image => (
            <GridItem key={image.id}>
              <CardItem color={image.avg_color}>
                <img src={image.src.large} alt={image.alt} />
              </CardItem>
            </GridItem>
          ))}
        </Grid>
        {this.state.images.length === 0 && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        {this.state.isVisible && (
          <Button type="button" onClick={this.onLoadMore}>
            Load more
          </Button>
        )}
      </>
    );
  }
}
