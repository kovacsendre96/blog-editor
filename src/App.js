import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getBlogData } from "./AxiosHelper";
import AddButton from "./components/Button";
import MakerCard from "./components/MakerCard";
import { globalStyles } from "./globalStyle";
import BackupIcon from '@material-ui/icons/Backup';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import TitleIcon from '@material-ui/icons/Title';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HttpIcon from '@material-ui/icons/Http';
import ImageIcon from '@material-ui/icons/Image';

const App = () => {
  const globalStyle = globalStyles();
  const [row, setRow] = useState([]);
  const [isClosedBlogTitle, setIsClosedBlogTitle] = useState(false);
  const [isClosedBlogDate, setIsClosedBlogDate] = useState(false);
  const [isClosedBlogUrl, setIsClosedUrl] = useState(false);
  const [isClosedBlogImg, setIsClosedImg] = useState(false);
  const [rowData, setRowData] = useState({ content: [] });



  const [blogTitle, setBlogTitle] = useState(null);
  const [blogDate, setBlogDate] = useState(null);
  const [blogUrl, setBlogUrl] = useState(null);
  const [blogImage, setBlogImage] = useState(null);


  const blogTitleChangeHandler = (e) => {
    const targetValue = e.target.value;
    setBlogTitle(targetValue);
  };

  const blogDateChangeHandler = (e) => {
    const targetValue = e.target.value;
    setBlogDate(targetValue);
  };

  const blogUrlChangeHandler = (e) => {
    const targetValue = e.target.value;
    setBlogUrl(targetValue);
  };

  const blogImageChangeHandler = (e) => {
    const targetValue = e.target.value;
    setBlogImage(targetValue);
  };

  const agreeBlogTitleHandler = () => {
    setRowData({ ...rowData, blog_title: blogTitle });
    setIsClosedBlogTitle(true);
  };

  const agreeBlogDateHandler = () => {
    setRowData({ ...rowData, blog_date: blogDate });
    setIsClosedBlogDate(true);
  };

  const agreeBlogUrlHandler = () => {
    setRowData({ ...rowData, blog_url: blogUrl });
    setIsClosedUrl(true);
  };

  const agreeBlogImageHandler = () => {
    setRowData({ ...rowData, blog_img: blogImage });
    setIsClosedImg(true);
  };
  const submitHandler = () => {

    getBlogData(rowData);
  };


  const addNewBlockHandler = () => {


    setRow([...row,
    <MakerCard
      rowData={rowData}
      setRowData={setRowData}

    />]);
  };

  console.log(rowData);

  return (
    <Grid container justifyContent="center">

      <Grid item xs={8}>
        <Grid container alignItems="center">
          <FormControl style={{ width: '80%' }} className={globalStyle.marginAll} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Blog URL címe</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={blogUrl}
              onChange={blogUrlChangeHandler}
              startAdornment={<InputAdornment position="start"><HttpIcon /></InputAdornment>}
              labelWidth={60}
              label={"Blog URL címe"}
            />
          </FormControl>
          {!isClosedBlogUrl &&
            < Grid >
              < IconButton size="medium" aria-label="upload picture" component="span" onClick={agreeBlogUrlHandler}>
                <CheckCircleIcon fontSize="large" className={globalStyle.greenColor} />
              </IconButton>
            </Grid>
          }
        </Grid>
      </Grid>

      <Grid item xs={8}>
        <Grid container alignItems="center">
          <FormControl style={{ width: '80%' }} className={globalStyle.marginAll} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Blog képe</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={blogImage}
              onChange={blogImageChangeHandler}
              startAdornment={<InputAdornment position="start"><ImageIcon /></InputAdornment>}
              labelWidth={60}
              label={"Blog képe"}
            />
          </FormControl>
          {!isClosedBlogImg &&
            < Grid >
              < IconButton size="medium" aria-label="upload picture" component="span" onClick={agreeBlogImageHandler}>
                <CheckCircleIcon fontSize="large" className={globalStyle.greenColor} />
              </IconButton>
            </Grid>
          }
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Grid container alignItems="center">
          <FormControl style={{ width: '80%' }} className={globalStyle.marginAll} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Blog címe</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={blogTitle}
              onChange={blogTitleChangeHandler}
              startAdornment={<InputAdornment position="start"><TitleIcon /></InputAdornment>}
              labelWidth={60}
              label={"Blog címe"}
            />
          </FormControl>
          {!isClosedBlogTitle &&
            < Grid >
              < IconButton size="medium" aria-label="upload picture" component="span" onClick={agreeBlogTitleHandler}>
                <CheckCircleIcon fontSize="large" className={globalStyle.greenColor} />
              </IconButton>
            </Grid>
          }
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Grid container alignItems="center">
          <FormControl style={{ width: '80%' }} className={globalStyle.marginAll} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Blog dátuma</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={blogDate}
              onChange={blogDateChangeHandler}
              startAdornment={<InputAdornment position="start"><CalendarTodayIcon /></InputAdornment>}
              labelWidth={60}
              label={"Blog dátuma"}
            />
          </FormControl>
          {!isClosedBlogDate &&
            < React.Fragment >
              < IconButton size="medium" aria-label="upload picture" component="span" onClick={agreeBlogDateHandler}>
                <CheckCircleIcon fontSize="large" className={globalStyle.greenColor} />
              </IconButton>
            </React.Fragment>
          }
        </Grid>
      </Grid>
      <MakerCard
        rowData={rowData}
        setRowData={setRowData}

      />
      {row.map((card => card))}
      <AddButton
        onClick={addNewBlockHandler}
      />

      <Button
        variant="contained"
        color="primary"
        startIcon={<BackupIcon />}
        onClick={submitHandler}
      >
        Feltöltés
      </Button>
    </Grid>
  );
};

export default App;
