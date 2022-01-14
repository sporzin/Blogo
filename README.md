# Blogo
Way to crate Blog
## Development

### Back-End
```bash
# link or copy .env file into Server directory
cp .env.ex Server/.env
# Run Docker
cd Server
docker-compse up [-d] [--build] # use --build for installing new requirements
```

### Front-End
```bash
# Run Docker automatically Reload
cd Front
docker-compose up [-d] [--build] # use --build for installing npm packages
```

## Deployment
```bash
# make your .env from .env.ex
cp .env.ex .env
# Run Docker
docker-compose up [-d] [--build]
```

## Docs
### BackEnd
- after you ran full-app or develop for back-end, you can reach API docs as ``<IP>:8000/docs``