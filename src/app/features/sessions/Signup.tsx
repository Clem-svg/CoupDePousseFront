import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Alert, Box, Button, Card, CardActions, CardContent, Container, Divider, FormControl, FormGroup, FormHelperText, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { resetErrorState, signUpUser } from "./sessionSlice";


function Signup() {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const passwordConfirmationRef = useRef<HTMLInputElement>();
  const errorMessages = useSelector((state: RootState) => state.session.errorMessages);

  const [errors, setErrors] = useState<Array<string>>([])
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const loading = false;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    emailRef?.current?.focus();
    if (errorMessages !== undefined) {
      setErrors(errorMessages);
      dispatch(resetErrorState());
    }
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors([]);
    if (emailRef?.current === undefined
      || emailRef.current.value === ""
      || passwordRef?.current === undefined
      || passwordRef.current.value === ""
      || passwordConfirmationRef?.current === undefined
          || passwordConfirmationRef.current.value === "") {
      return setErrors(["Tous les champs sont obligatoires"])
    }
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setErrors(["Le mot de passe et la confirmation ne correspondent pas"])
    }
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    const response = await dispatch(signUpUser(payload)) as any;

    console.log(response);
    if (errorMessages.length > 0) {
      navigate("/");
    } else {
      return setErrors(errorMessages);
    }
  }

  const passwordInput = <OutlinedInput id="password" type={showPassword ? 'text' : 'password'} inputRef={passwordRef} endAdornment={
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={() => setShowPassword(!showPassword)}
        onMouseDown={() => setShowPassword(!showPassword)}
        edge="end">
          {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  } />;

  const passwordConfirmationInput = <OutlinedInput id="password-confirmation" type={showPassword ? 'text' : 'password'} inputRef={passwordConfirmationRef} endAdornment={
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={() => setShowPassword(!showPassword)}
        onMouseDown={() => setShowPassword(!showPassword)}
        edge="end">
          {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  } />;

  return (
    <section style={{marginTop:"2em"}}>
      <Container sx={{ border: 'none' }} maxWidth="md">
      <Card style={{ border: "none", boxShadow: "none" }} sx={{ maxWidth: 'md'}}>
          <CardContent>
            <Container maxWidth="sm">
              <Typography variant="h2" color="text.primary" gutterBottom>
                Création de compte
              </Typography>
              {errors.length > 0 ?
                <Alert severity="error" aria-live="assertive">
                  {errors.map((error, index) => {
                    return <p key={`alert-${index}`}>
                      {error}
                    </p>
                  })}
                </Alert>
              : <></>} 
              <form onSubmit={handleSubmit}>
                <FormGroup row={true} id="email-group" sx={{marginTop: "1em"}}>
                  <FormControl fullWidth>
                    <InputLabel required htmlFor="email" id="email-label">Adresse mail</InputLabel>
                    <Input id="email" type="email" inputRef={emailRef}/>
                  </FormControl>
                </FormGroup>
                <FormGroup row={true} id="password-group" sx={{marginTop: "1em"}}>
                  <FormControl fullWidth>
                    <InputLabel required htmlFor="password" id="password-label">Mot de passe</InputLabel>
                    {passwordInput}
                  </FormControl>
                </FormGroup>
                <FormGroup row={true} id="password-confirmation-group" sx={{marginTop: "1em"}}>
                  <FormControl fullWidth>
                    <InputLabel required htmlFor="password-confirmation" id="password-confirmation-label">Mot de passe confirmation</InputLabel>
                    {passwordConfirmationInput}
                  </FormControl>
                </FormGroup>
                <FormGroup row={true} id="submit-group" sx={{marginTop: "1em"}}>
                  <FormControl fullWidth>
                    <Button 
                      sx={{ backgroundColor: "primary.light" }}                    
                      disabled={loading} 
                      variant="contained" 
                      color="primary" 
                      type="submit" 
                      id="submit-button">S&apos;enregistrer</Button>
                  </FormControl>
                </FormGroup>
              </form>
              <Divider sx={{marginTop: "2em"}} light={true} />
            </Container>
          </CardContent>
          <CardActions sx={{marginBottom: "1em", justifyContent: 'center' }} disableSpacing >
            <Box>
            Déjà membre ? <Link to="/login">Connection</Link>
            </Box>
          </CardActions>
        </Card>
      </Container>

    </section>
  )
}

export default Signup