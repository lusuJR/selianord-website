using AutoMapper;
using Selianord.Api.DTOs;
using Selianord.Api.Models;

namespace Selianord.Api.Profiles;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        // Project
        CreateMap<Project, ProjectDto>();
        CreateMap<CreateProjectDto, Project>();

        // Service
        CreateMap<Service, ServiceDto>();
        CreateMap<CreateServiceDto, Service>();

        // Contact
        CreateMap<CreateContactDto, Contact>()
            .ForMember(dest => dest.FullName,
                opt => opt.MapFrom(src => src.Name));

        CreateMap<Contact, ContactDto>()
            .ForMember(dest => dest.Name,
                opt => opt.MapFrom(src => src.FullName));

        // Quote
        CreateMap<QuoteRequest, QuoteDto>();
        CreateMap<CreateQuoteDto, QuoteRequest>();

        // Blog
        CreateMap<Blog, BlogDto>();
        CreateMap<CreateBlogDto, Blog>();
    }
}