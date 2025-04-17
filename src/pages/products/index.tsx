import { useEffect, useState } from "react";
import MainLayout from "../../components/partials/layout/MainLayout";
import { Fruit } from "../../types/interfaces/fruit";
import getBuah from "../../services/data/getBuah";
import SideBar from "../../components/fragments/products/SideBar";
import ListProducts from "../../components/fragments/products/ListProducts";
import Dropdown from "../../components/elements/dropdown";
import { Location } from "../../types/interfaces/location";
import SearchProducts from "../../components/elements/search/SearchProducts";
const locationProducts: Location[] = [
  {
    city: "All",
  },
  {
    city: "Amritsar",
  },
  {
    city: "Chandigarh",
  },
  {
    city: "Delhi",
  },
  {
    city: "Jaipur",
  },
  {
    city: "Lucknow",
  },
  {
    city: "Agra",
  },
  {
    city: "Varanasi",
  },
  {
    city: "Patna",
  },
  {
    city: "Shimla",
  },
];
