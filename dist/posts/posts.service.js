"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("./post.entity");
const typeorm_2 = require("typeorm");
let PostService = exports.PostService = class PostService {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    getPosts() {
        return this.postsRepository.find();
    }
    createPost(post) {
        const novoPost = new post_entity_1.Post();
        novoPost.autor = post.autor;
        novoPost.conteudo = post.conteudo;
        novoPost.dataPublicacao = post.dataPublicacao;
        novoPost.isActive = post.isActive;
        return this.postsRepository.save(novoPost);
    }
    getPost(id) {
        return this.postsRepository.findOneBy({ id: id });
    }
    async editPost(id, post) {
        const postAtualizar = await this.postsRepository.findOneBy({ id: id });
        postAtualizar.autor = post.autor;
        postAtualizar.conteudo = post.conteudo;
        postAtualizar.dataPublicacao = post.dataPublicacao;
        postAtualizar.isActive = post.isActive;
        return this.postsRepository.save(postAtualizar);
    }
    deletePost(id) {
        return this.postsRepository.delete(id);
    }
};
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostService);
//# sourceMappingURL=posts.service.js.map