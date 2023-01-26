import { Container, Stack, TextField, Button, Alert } from "@mui/material";
import * as React from "react";
import axios from "axios";
import { API_URL } from "../constant";
const ProductAdd = () => {
  const DEFAULT_ALERT = {
    show: false,
    msg: "",
    type: "error",
  };
  const [productName, setProductName] = React.useState("");
  const [productBrand, setProductBrand] = React.useState("");
  const [alert, setAlert] = React.useState(DEFAULT_ALERT);
  const Label = () => {
    return <h2>Yeni Ürün Formu</h2>;
  };

  const onSave = async () => {
    if (alert?.show) {
      setAlert(DEFAULT_ALERT);
    }

    if (productName && productBrand) {
      const values = {
        productName,
        productBrand,
      };

      try {
        // axios paketi yerine fetch paketi de kullanılabilir ama kolaylık ve stabilite bakımından axios.
        // API_URL' imizi her yerde yazmaktansa, constant.js içerisinden export edip her yerde kullanmak mantıklı
        const save = await axios.post(API_URL, values);
        setAlert({
          type: "success",
          show: true,
          msg: "Veriler başarıyla kaydedildi.",
        });
      } catch (error) {
        setAlert({
          type: "error",
          show: true,
          msg: "Bir hata oluştu ve kaydedilemedi -" + error.message,
        });
      }
    } else {
      setAlert({
        show: true,
        msg: "Lütfen Tüm Alanları Doldurun!",
        type: "error",
      });
    }
  };

  return (
    <Container style={styles.container}>
      {alert?.show && <Alert severity={alert.type}>{alert.msg}</Alert>}
      <Label />
      <Stack spacing={2}>
        <TextField
          label="Ürün Adı"
          variant="outlined"
          required
          onChange={(val) => setProductName(val.target.value)}
        />
        <TextField
          label="Marka"
          variant="outlined"
          required
          onChange={(val) => setProductBrand(val.target.value)}
        />
        <Button variant="contained" onClick={onSave}>
          Save Product
        </Button>
      </Stack>
    </Container>
  );
};

export default ProductAdd;

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
};
