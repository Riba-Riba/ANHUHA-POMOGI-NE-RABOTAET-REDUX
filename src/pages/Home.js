import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryIndex } from '../redux/slices/filterSlice';
import { useState } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';

import Skeleton from '../components/PizzaBlock/Skeleton';
import { Plagination } from '../components/Plagination';
import { SearchContext } from '../App';
const Home = () => {
  const dispatch = useDispatch();
  const categoryIndex = useSelector((state) => state.filter.categoryIndex);
  const sort = useSelector((state) => state.filter.sort.sortProperty);

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoad, setLoad] = React.useState(true);

  const [currentPage, setCurrentPage] = React.useState(1);

  const onClickCategory = (index) => {
    dispatch(setCategoryIndex(index));
  };

  React.useEffect(() => {
    (async function () {
      try {
        setLoad(true);
        const category = categoryIndex > 0 ? `category=${categoryIndex}` : ``;
        const order = sort.includes('-') ? `asc` : `desc`;
        const sortBy = sort.replace('-', '');
        const search = searchValue ? `&search=${searchValue}` : '';
        const res = await fetch(
          `https://6410c06fda042ca131fb1b88.mockapi.io/itemsPizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
        );
        const pizza = await res.json();
        setItems(pizza);
      } catch (error) {}
      setLoad(false);
    })();
    window.scrollTo(0, 0);
  }, [categoryIndex, sort, searchValue, currentPage]);
  const pizzas = items.map((el) => (
    <PizzaBlock key={el.id} {...el}></PizzaBlock>
  ));
  const skelet = [...new Array(9)].map((el, index) => (
    <Skeleton key={index}></Skeleton>
  ));
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryIndex}
          onClickCategory={onClickCategory}
        ></Categories>
        <Sort></Sort>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoad ? skelet : pizzas}</div>
      <Plagination
        onChangePage={(number) => setCurrentPage(number)}
      ></Plagination>
    </div>
  );
};

export default Home;
