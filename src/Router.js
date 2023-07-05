import React, { lazy } from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { withLoading } from "./HOC/withLoading";
import EmptyLayout from './layout/EmptyLayout/EmptyLayout';
import HotelLayout from './layout/HotelLayout/HotelLayout';

const MainLayout = lazy(() => import('./layout/MainLayout'))
const GuestLayout = lazy(() => import('./layout/GuestLayout/GuestLayout'))
const HomeLayout = lazy(() => import('./layout/HomeLayout'))
// const EmptyLayout = lazy(() => import('./layout/EmptyLayout/EmptyLayout'))
// const HotelLayout = lazy(() => import('./layout/HotelLayout/HotelLayout'))
const Home = lazy(() => import('./page/HomePage/HomePage'))
const Detail = lazy(() => import('./page/Detail'))
const SearchResult = lazy(() => import('./page/SearchResult/SearchResult'))
const Hotel = lazy(() => import('./page/Hotel/Hotel'))
const RoomHotel = lazy(() => import('./page/Hotel/RoomHotel/RoomHotel'))
const UtilitiesHotel = lazy(() => import('./page/Hotel/UtilitiesHotel/UtilitiesHotel'))
const QuestionHotel = lazy(() => import('./page/Hotel/QuestionHotel/QuestionHotel'))
const InfoCustomer = lazy(() => import('./page/Guest/InfoCustomer/InfoCustomer'))
const ViewedByCusstomers = lazy(() => import('./page/Guest/ViewedByCustomers/ViewedByCustomers'))
const CustomerLiked = lazy(() => import('./page/Guest/CustomerLiked/CustomerLiked'))
const Login = lazy(() => import('./page/Auth/Login/Login'))
const Register = lazy(() => import('./page/Auth/Register/Register'))
const ChangePassword = lazy(() => import('./page/Auth/ChangePassword/ChangePassword'))
const BookRoom = lazy(() => import('./page/BookRoom/BookRoom'))

const HomePage = withLoading(Home)
const DetailPage = withLoading(Detail)
const SearchResultsPage = withLoading(SearchResult)
const HotelPage = withLoading(Hotel)
const RoomPage = withLoading(RoomHotel)
const UtilitiesHotelPage = withLoading(UtilitiesHotel)
const QuestionHotelPage = withLoading(QuestionHotel)
const InfoCustomerPage = withLoading(InfoCustomer)
const ViewedByCusstomersPage = withLoading(ViewedByCusstomers)
const CustomerLikedPage = withLoading(CustomerLiked)
const LoginPage = withLoading(Login)
const RegisterPage = withLoading(Register)
const ChangePasswordPage = withLoading(ChangePassword)
const BookRoomPage = withLoading(BookRoom)


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>

            <Route
                path="/"
                element={
                    <MainLayout />
                }
            >
                <Route index element={<HomePage />} />
                <Route path="detail/1" element={<DetailPage />} />
                <Route path="searchresult/1" element={<SearchResultsPage />} />
                <Route path="book-room" element={<BookRoomPage />} />
            </Route>

            <Route
                path='hotel'
                element={<HotelLayout />}>

                <Route index element={<HotelPage />} />
                <Route path='room' element={<RoomPage />} />
                <Route path='utilities' element={<UtilitiesHotelPage />} />
                <Route path='question' element={<QuestionHotelPage />} />
            </Route>

            <Route
                path='guest'
                element={<GuestLayout />}>

                <Route index element={<InfoCustomerPage />} />
                <Route path='viewed' element={<ViewedByCusstomersPage />} />
                <Route path='liked' element={<CustomerLikedPage />} />
            </Route>

            <Route
                path='user'
                element={<EmptyLayout />}>

                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="changepassword" element={<ChangePasswordPage />} />

            </Route>

        </>
    )
)